import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const result = new this.productModel(createProductDto);
    return result.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    const result = this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
    return result;
  }

  async remove(id: string) {
    const result = await this.productModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('id not found');
    }
    return { message: 'Delete successful' };
    // try {
    //   const result = await this.productModel.findByIdAndDelete(id).exec();
    //   if (!result) {
    //     throw new NotFoundException('id not found');
    //   }
    //   return { message: 'Delete successful' };
    // } catch (error) {
    //   if (error instanceof Error) {
    //     throw error;
    //   }
    //   return { error: 'An unexpected error occurred' };
    // }
  }
}

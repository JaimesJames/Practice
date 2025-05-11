import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private productService: ProductsService,
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const productResult = await this.productService.findOne(
      createOrderDto.productId,
    );
    if (!productResult) {
      throw new NotFoundException('Do not found the product');
    }
    const result = new this.orderModel(createOrderDto);
    return result.save();
  }

  async findOne(id: string): Promise<Order | null> {
    const order = this.orderModel.findById(id).populate('productId').exec();
    return order;
  }
}

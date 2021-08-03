import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProduct } from "./product.dto";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepo: Repository<Product>) { }

    async AddProduct(newProduct: CreateProduct): Promise<any> {
        return this.productRepo.save(newProduct);
    }
    async GetProducts(): Promise<CreateProduct[]> {

        return this.productRepo.find({withDeleted:false})
    }

  async  GetProduct(productId):Promise<CreateProduct> {
        let product = await this.productRepo.findOne(productId,{withDeleted:false});
        if (product)
           return product; 
        throw new NotFoundException('Product not found...')
    }

    async UpdateProduct(updatedProduct: Product): Promise<any> {
        this.productRepo.update(updatedProduct.id,updatedProduct);
        return this.GetProduct(updatedProduct.id);
    }

    async DeleteProduct(id:string): Promise<any> {
        let product = await this.productRepo.findOne(id);
        return this.productRepo.remove([product]);
    }
}
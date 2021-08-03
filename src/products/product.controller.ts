import { Body, Controller, Get, Param, Post,Patch, Delete } from "@nestjs/common";
import { Product } from "src/models/product.model";
import { ObjectID } from "typeorm";
import { CreateProduct } from "./product.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }
    @Get()
 getProducts() {
        return  this.productService.GetProducts();
    }

    @Get(':id') 
    getProduct(@Param('id') id:string) {
        return this.productService.GetProduct(id);
    }
 
    @Post()
   async addProduct(
        @Body() product: CreateProduct 
    ) {
        return await this.productService.AddProduct(product)
    }

    @Patch()
    async updateProduct(
         @Body() product: Product 
     ) {
         return await this.productService.UpdateProduct(product)
     }

     @Delete(':id') 
     deleteProduct(@Param('id') id:string) {
         return this.productService.DeleteProduct(id);
     }
  
} 
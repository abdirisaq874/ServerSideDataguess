const {faker} = require('@faker-js/faker');
const uuid = require('uuid');

const FakeProduct = ()=>{
    return {
        title: faker.commerce.product(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.urlLoremFlickr({ category: 'business' }),
        category: faker.commerce.department(),
        company: faker.company.buzzAdjective(),
        colors: [faker.color.colorByCSSColorSpace({ format: 'decimal' })],
        featured: faker.string.numeric(),
        shipping: faker.string.numeric(),
        id: uuid.v4(),
    }
}

console.log(FakeProduct());


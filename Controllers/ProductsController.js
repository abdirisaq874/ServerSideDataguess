const products = require('../Models/Products');
const CustomError = require('../Errors');
const FetchProducts = async (req, res) => {
  // const sanitizedQueryParams = await this.sanitizeQuery(req.params);
  const {
    search,
    company,
    category,
    order,
    featured,
    shipping,
    minPrice,
    maxPrice,
    page,
  } = req.query;

  const sortOptions = {
    high: { price: -1 },
    low: { price: 1 },
    'a-z': { title: 1 },
    'z-a': { title: -1 },
  };

  const queryObject = {
    sort: sortOptions['a-z'],
    filters: {},
  };
  if (order) {
    queryObject.sort = sortOptions[order];
  }

  if (search) {
    queryObject.filters.title = { $regex: search };
  }
  if (company && company !== 'all') {
    queryObject.filters.company = { $eq: company };
  }
  if (category && category !== 'all') {
    queryObject.filters.category = { $eq: category };
  }
  if (featured) {
    queryObject.filters.featured = { $eq: true };
  }
  if (shipping) {
    queryObject.filters.shipping = { $eq: true };
  }
  if (minPrice) {
    queryObject.filters.price = { $gte: minPrice };
  }
  if (maxPrice) {
    if (queryObject.filters.price) {
      queryObject.filters.price.$lte = maxPrice;
    } else {
      queryObject.filters.price = { $lte: maxPrice };
    }
  }
  if (page) {
    queryObject.pagination = { page: page - 1 };
  }

  const query = products.find({ ...queryObject.filters });
  if (queryObject.sort) {
    query.collation({ locale: 'en' }).sort(queryObject.sort);
  }
  if (queryObject.pagination && queryObject.pagination.page > 0) {
    query.skip(queryObject.pagination.page * 10);
  }

  const results = await query.limit(10).exec();

  const total = await products.countDocuments({ ...queryObject.filters });

  const categories = await products.distinct('category');
  const companies = await products.distinct('company');
  const meta = {
    pagination: {
      page: parseInt(page) > 0 ? parseInt(page) : 1,
      pageSize: 10,
      pageCount: Math.ceil(total / 10),
      total,
    },
    categories: ['all', ...categories],
    companies: ['all', ...companies],
  };

  const data = results.map((result) => {
    return {
      id: result.id,
      attributes: {
        title: result.title,
        price: result.price,
        description: result.description,
        image: result.image,
        category: result.category,
        company: result.company,
        colors: result.colors,
        featured: result.featured,
        shipping: result.shipping,
      },
    };
  });

  res.send({ data, meta: meta });
};

const FetchProduct = async (req, res) => {
  const { id: productId } = req.params;
  //check if the id is numeric
  if (isNaN(productId)) {
    throw new CustomError.BadRequestError('Invalid product id');
  }
  const product = await products.findOne({ id: productId });
  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  const data = {
    id: product.id,
    attributes: {
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
      company: product.company,
      colors: product.colors,
      featured: product.featured,
      shipping: product.shipping,
    },
  };

  res.send({ data, meta: {} });
};

const ProtectedRoute = (req, res) => {
  res.send({ message: 'hello from protected route' });
};
module.exports = { FetchProducts, FetchProduct, ProtectedRoute };

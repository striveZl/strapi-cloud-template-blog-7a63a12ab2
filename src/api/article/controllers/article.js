'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article',({strapi})=>({
  async find(ctx){
    console.log("service find")

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  }
}));

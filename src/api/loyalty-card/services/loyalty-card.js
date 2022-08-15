'use strict';

/**
 * loyalty-card service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loyalty-card.loyalty-card');

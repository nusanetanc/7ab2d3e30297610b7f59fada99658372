export class Billing {
    constructor(
        public noinvoice: String,
        public namepack: String,
        public pricepack: Number,
        public priceinstal: Number,
        public pricerouter: Number,
        public pricestb: Number,
        public promoname : String,
        public pricepromo: Number,
        public pricerj45cable: Number,
        public changetax: Number,
        public totalprice: Number,
        public totalpay: Number,
        public billdate: Date,
        public duedate: Date,
        public paydate: Date,
        public status: String,
        public desc: String,
    ) {  }
}

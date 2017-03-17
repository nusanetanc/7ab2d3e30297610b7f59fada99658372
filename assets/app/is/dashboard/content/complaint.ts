export class Information {
    constructor(
        public subject: String,
        public category: String,
        public subcategory: String,
        public dateopen: Date,
        public dateclose: Date,
        public status: String,
        public lastchat: [String],
    ) {  }
}

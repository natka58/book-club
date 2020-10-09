mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/book-club',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
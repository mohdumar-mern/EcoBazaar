class ApiFunctionality {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const { keyword, keywords } = this.queryStr;
    const searchTerm = keyword || keywords;

    // Only apply search if category is NOT present
    if (!this.queryStr.category && searchTerm && searchTerm.trim() !== "") {
      const regex = new RegExp(searchTerm, "i");
      this.query = this.query.find({ name: regex });
    }

    return this;
  }

  filter() {
    const { category, keyword, keywords, page, limit, ...rest } = this.queryStr;

    const queryObj = {};

    // If category exists → ignore other filters
    if (category && category.trim() !== "") {
      queryObj.category = category;
    } else {
      // Merge keyword search if present
      const searchTerm = keyword || keywords;
      if (searchTerm && searchTerm.trim() !== "") {
        queryObj.name = { $regex: searchTerm, $options: "i" };
      }

      // Merge remaining filters (other than page/limit/keyword)
      Object.assign(queryObj, rest);
    }

    // Apply final query
    this.query = this.query.find(queryObj);

    return this;
  }
}

export default ApiFunctionality;

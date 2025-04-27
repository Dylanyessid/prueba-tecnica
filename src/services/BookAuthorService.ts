
import BookAuthorsModel from "../models/BookAuthors";

class BookAuthorService {
  static async updateAuthorsToBook(ids: number[], bookId: number) {
    try {
      await BookAuthorsModel.update(
        { deletedAt: new Date() }, 
        { where: { book_id: bookId} }
      );

      const result = await this.addAuthorsToBook(ids, bookId); 
      return result;
    } catch (error) {
        return false; 
    }
  }
  static async addAuthorsToBook(ids: number[], bookId: number) {
    try {
      const bookAuthors = ids.map((author) => {
        return {
          book_id: bookId,
          author_id: author, // Assuming author has an id property
        };
      });
      await BookAuthorsModel.bulkCreate(bookAuthors);
      return true;
    } catch (error) {
      console.error("Error inserting book:", error);
      return false;
    }
  }
}

export default BookAuthorService;

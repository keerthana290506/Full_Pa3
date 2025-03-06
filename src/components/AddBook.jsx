import { useState,useNavigate} from "react";


const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Book Added: ${title} by ${author}`);
      navigate('/');
    };
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" required />
          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 rounded" required />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded" required />
          <input type="url" placeholder="Cover Image URL" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} className="border p-2 rounded" required />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    );
  };
  export default AddBook;
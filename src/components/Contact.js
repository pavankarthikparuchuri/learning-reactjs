const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="p-2 m-2 border rounded-lg"
          placeholder="Name"
        />
        <input
          type="text"
          className="p-2 m-2 border rounded-lg"
          placeholder="Message"
        />
        <button className="p-2 m-2 border bg-gray-5 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

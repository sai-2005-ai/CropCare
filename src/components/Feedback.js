const Feedback = () => {
    return (
      <div>
        <h2>Feedback</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Feedback"></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  };
  
  export default Feedback;
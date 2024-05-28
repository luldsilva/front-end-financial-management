
const Terms = () => {
    return (
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="form-checkbox text-medium-blue focus:ring-medium-blue h-4 w-4 rounded"
          />
          <label
            htmlFor="terms"
            className="ml-2 block text-sm text-medium-grey"
          >
            <a>Li e aceito os termos</a>
          </label>
        </div>
      </div>
    );
  };
  export default Terms;
  
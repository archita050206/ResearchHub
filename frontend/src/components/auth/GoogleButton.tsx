const GoogleButton = () => {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-2 transition hover:bg-gray-100"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="h-5 w-5"
      />

      <span className="font-medium text-slate-700">
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleButton;
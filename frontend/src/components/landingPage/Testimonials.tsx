interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Senior Research Lead",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "ResearchHub has completely transformed the way my team conducts literature reviews. Everything is organized, searchable, and incredibly intuitive.",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Data Scientist",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The semantic search feature saves me hours every week. Finding relevant papers has never been easier.",
  },
  {
    id: 3,
    name: "Prof. Elena Vance",
    role: "University Professor",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I recommend ResearchHub to all my graduate students. It keeps research organized and makes collaboration effortless.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Trusted by Researchers Worldwide
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Thousands of researchers rely on ResearchHub every day.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.id}
              className="rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex items-center gap-4">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-lg font-semibold">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>

                </div>

              </div>

              <p className="leading-7 text-gray-600 italic">
                "{testimonial.review}"
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
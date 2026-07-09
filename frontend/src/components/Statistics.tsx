interface Stat {
  id: number;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: "250M+",
    label: "Papers Indexed",
  },
  {
    id: 2,
    value: "50K+",
    label: "Active Researchers",
  },
  {
    id: 3,
    value: "1M+",
    label: "Research Notes",
  },
  {
    id: 4,
    value: "300K+",
    label: "Collections Created",
  },
];

const Statistics = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Trusted by Researchers Worldwide
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Helping thousands of researchers organize knowledge every day.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.id}
              className="rounded-2xl border bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="mb-4 text-5xl font-bold text-blue-600">
                {stat.value}
              </h3>

              <p className="text-lg font-medium uppercase tracking-wider text-gray-600">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Statistics;
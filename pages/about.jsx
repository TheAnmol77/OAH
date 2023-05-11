function about(){
    const contributors = [
        {
          name: 'Dishant Kaushal',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed magna vel turpis ultricies commodo. Sed efficitur volutpat ex id pretium.',
          image: 'https://source.unsplash.com/random/300x300'
        },
        {
          name: 'Manan Chawla',
          bio: 'In gravida elit non enim gravida, a molestie augue ultrices. Donec in nibh at tellus iaculis eleifend vel sit amet ante.',
          image: 'https://source.unsplash.com/random/300x300'
        },
        {
          name: 'Anmol Madan',
          bio: 'Nullam varius neque vel lacus elementum, auctor bibendum elit venenatis. Aenean ac urna vitae nibh bibendum rhoncus.',
          image: 'https://source.unsplash.com/random/300x300'
        },
        {
            name: 'Gautam Garg',
            bio: 'Nullam varius neque vel lacus elementum, auctor bibendum elit venenatis. Aenean ac urna vitae nibh bibendum rhoncus.',
            image: 'https://source.unsplash.com/random/300x300'
          }
      ];
    return(
    <div className="bg-gray-100 mt-[12vh] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-800 leading-7 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis est euismod, semper elit non, faucibus nulla. Donec lobortis, urna vel lacinia bibendum, lectus lacus varius nisl, ut bibendum justo elit non nunc. Nulla facilisi. Aliquam sed tellus sit amet sem auctor consequat.
        </p>
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributors.map(contributor => (
            <div key={contributor.name} className="bg-white shadow-md rounded-md p-6">
              <img src={contributor.image} alt={contributor.name} className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{contributor.name}</h3>
              <p className="text-gray-800 leading-7">{contributor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
export default about
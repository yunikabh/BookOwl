export default function Author(){
    return(
        <div className="max-w-5xl mx-auto bg-white shadow rounded-md p-6 mt-8">
      <h2 className="text-2xl font-semibold text-[#b68a6a] mb-4">About the Author</h2>
      <div className="flex items-center gap-6">
        {/* Author Photo */}
        <img
          src="/photos/user.jpg" // Add the correct path to the author's image
          alt="Eryn Brooks"
          className="w-20 h-20 object-cover rounded-full "
        />
        <div>
          {/* Author Description */}
          <p className="text-[#265073] font-serif">
            Eryn Brooks is an emerging author known for blending fantasy with rich, emotional storytelling. 
            With a deep passion for exploring complex characters and their journeys, Eryn creates worlds 
            where the lines between heroism and villainy are often blurred. "Cursed by the Black Heart" is 
            their debut novel, marking the start of an exciting new chapter in the fantasy genre.
          </p>
        </div>
      </div>
    </div>
    )
}
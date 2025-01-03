export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4  dark:bg-gradient-to-t from-purple-800 via-purple-700 to-purple-600">
      <div className="container mx-auto px-4 ">
        <div className="text-center text-gray-600">
          <p className="font-semibold dark:text-white">Jay Shelke</p>
          <p className="text-sm mt-1 dark:text-white">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}




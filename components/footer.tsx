export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; {currentYear} met<span className="text-indigo-600">ai</span>ntuit. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

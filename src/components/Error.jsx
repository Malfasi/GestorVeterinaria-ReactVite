export default function Error({ children }) {
  return (
    <div className="bg-red-800 p-3 rounded-md font-bold text-white uppercase text-center mb-5">
      <p>{children}</p>
    </div>
  )
}

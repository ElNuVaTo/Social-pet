const Ayuda = ({ titulo, descripcion }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base">{descripcion}</p>
      </div>
    </div>
  );
};

export default Ayuda;

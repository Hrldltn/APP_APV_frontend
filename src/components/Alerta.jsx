
const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-sky-500 to-sky-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-2 mt-5 md:mb-10 `}>
        {alerta.msg}
    </div>
  )
}

export default Alerta
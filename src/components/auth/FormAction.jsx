const fixedFormButtonClass = 'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 mt-10'

export default function FormAction({
    handleSubmit,
    type = 'Button',
    action = 'submit',
    text
}) {
    return (
        <button
            type={type === 'Button' ? 'button' : action}
            className={fixedFormButtonClass}
            onClick={handleSubmit} 
        >
            {text}
        </button>
    );
}

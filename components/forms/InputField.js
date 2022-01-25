import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Input field
 * @param {string} type - Input type
 * @param {FontAwesomeIcon} icon - Icon name
 * @param {boolean} flipIcon - Whether or not flip the icon
 * @param {string} placeholder - Placeholder
 * @param {function} onChange - On change callback
 * @returns {JSX.Element}
 * @constructor
 */
const InputField = ({ type = 'text', icon, flipIcon = false, placeholder, onChange }) => {
    return (
        <div className="relative block">
            <span className="absolute inset-y-0 left-6 m-auto flex items-center justify-center text-sm opacity-50">
                <FontAwesomeIcon icon={icon} className={`${flipIcon ? 'fa-flip-horizontal' : ''}`} />
            </span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-xl border-none bg-white py-3 pl-16 pr-4 text-sm shadow-md placeholder:opacity-50 focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple"
                onChange={onChange}
            />
        </div>
    )
}

export default InputField

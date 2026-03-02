export default function Input({ type, placeholder, icon: Icon, ...props }) {
    return (
      <div className="input-group">
        <input type={type} placeholder={placeholder} required {...props} />
        <Icon className="input-icon" />
      </div>
    );
  }
  
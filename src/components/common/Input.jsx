export default function Input({ type, placeholder, icon: Icon }) {
    return (
      <div className="input-group">
        <input type={type} placeholder={placeholder} required />
        <Icon className="input-icon" />
      </div>
    );
  }
  
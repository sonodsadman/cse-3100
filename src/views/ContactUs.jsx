import { useState } from "react";

export default function ContactUs() {
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: "", phone: "", email: "" });
    };
  
    return (
      <section className="text-center mt-5 py-5" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2 style={{ color: '#2c3e50', fontWeight: '700' }}>Contact Us</h2>
        <p className="mt-3" style={{ fontSize: '18px', color: '#7f8c8d' }}>
          If you have any questions or would like to know more about adoption, feel free to contact us using the form below.
        </p>
        <form
          className="mt-4 mx-auto"
          onSubmit={handleSubmit}
          style={{ maxWidth: '400px', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
            value={formData.name}
            onChange={handleChange}
              className="form-control"
              placeholder="Name"
              required
              style={{ padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
            value={formData.phone}
            onChange={handleChange}
              className="form-control"
              placeholder="Phone"
              required
              style={{ padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
            value={formData.email}
            onChange={handleChange}
              className="form-control"
              placeholder="Email"
              required
              style={{ padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '5px',
              backgroundColor: '#3498db',
              borderColor: '#3498db',
            }}
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
  
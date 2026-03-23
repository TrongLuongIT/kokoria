"use client"
import { useContactForm } from '@/src/hooks/contact-form-hook';

export default function Brand() {

  const { state, formAction, isPending } = useContactForm();

  return (
    <div className="container-fluid sticky-brand" style={{ backgroundColor: "lightgray" }}>
      <div className="container px-0 px-sm-3 d-flex justify-content-between">
        <div className="d-flex">
          <div>Hotline</div>
          <div className="ps-2">0933314114</div>
        </div>
        <form action={formAction} className="d-flex">
          <div className="m-2">
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              required
              className="form-control"
            />
          </div>
          <div className="m-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="form-control"
            />
          </div>
          <div className="m-2">
            <input
              type="text"
              name="message"
              className="form-control"
              placeholder="Nội dung"
              required
            />
          </div>
          <div className="m-2">
            {
              isPending ? 
                <div className="btn btn-primary">Đang gửi...</div> :
                <button type="submit" className="btn btn-primary">Gửi</button>
            }
          </div>
        </form>
      </div>
    </div>
  );
}
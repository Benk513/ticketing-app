"use client";
import { useRouter } from "next/navigation"
import React, {useState} from "react"
const TicketForm = () => {


    const router = useRouter()

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => {
            return { ...prevState, [name]: value }
            
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        const res = await fetch("/ticketing-app/app/api/Tickets", {
            method: "POST",
            body: JSON.stringify({ formData }),
            "content-type": "application/json",
        })

        if (!res.ok) {
            throw new Error("Failed to create Ticket")
        }


        router.refresh()
        router.push("/")

    };

    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
    };

    const [formData, setFormData] = useState(startingTicketData);

    return <div className="flex justify-center">
        <form action=""
            className="flex flex-col gap-3 lg:w-1/3"
        onSubmit={handleSubmit}>
            <h3>Create Your Ticket</h3>
            <label htmlFor="">Title</label>
            <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                required={true} 
                value={formData.title}
                />
            <label htmlFor="">Description</label>
            <textarea
                 
                name="description"
                id="description"
                onChange={handleChange}
                required={true} 
                value={formData.description}
                 rows="5"
                />

            <label htmlFor="">Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Hardware Problem"> Hardware Problem</option>
                <option value="Hardware Problem"> Software Problem</option>
                <option value="Hardware Problem"> Project</option>
            </select>

            <label>Priority</label>
            <div>
                <input
                    type="text"
                    id="priority-1"
                    name="priority"
                    type="radio"
                    onChange={handleChange}
                    value={1}
                    checked={formData.priority == 1}
                />
                <label htmlFor="">1</label>

                <input
                    type="text"
                    id="priority-2"
                    name="priority"
                    type="radio"
                    onChange={handleChange}
                    value={2}
                    checked={formData.priority == 1}
                />
                <label htmlFor="">2</label>


                
            </div>

            <label htmlFor="">Progress</label>
            <input type="range" name="progress" id="progress" min="0" max="100" value={formData.progress} onChange={handleChange} />

            <label htmlFor="status">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} >
                <option value="not started">Not Started</option>
                <option value="started">Started</option>
                <option value="done">Done</option> 
            </select>

            <input type="submit" className="btn" value="Create Ticket" />

      </form>
  </div>
}

export default TicketForm

// if u want to behave like client side js , use client


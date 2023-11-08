import React, { useState, useEffect } from "react";
import { TableStyled, TableHead, HeadData, TableBody } from "./style";
import { getLeads, updateLeadStatus } from "../../Services/LeadsService";
import DragAndDrop from "../DragAndDrop";

const Table = () => {
    const [leads, setLeads] = useState([]);
    const heads = ["Cliente Potencial", "Dados Confirmados", "Analise do Lead"];

    const returnLeads = async () => {
        const response = await getLeads();
        setLeads(response);
    }

    useEffect(() => {
        returnLeads();
        
    }, []); 

    const handleLeadStatusChange = (lead, newStatus) => {
        switch (newStatus) {
            case 0:
                updateLeadStatus(lead.email, "Cliente Potencial");
                break;
            case 1:
                updateLeadStatus(lead.email, "Dados Confirmados");
                break;
            case 2:
                updateLeadStatus(lead.email, "Analise do Lead");
                break;
            default:
                break;
        }
    }

    return (
        <TableStyled>
            <TableHead>
                {heads.map((item, index) => (
                    <HeadData key={index}>{item}</HeadData>
                ))}
            </TableHead>
            <TableBody>
            {leads && leads.map((lead, index) => (
                <DragAndDrop key={lead.email} lead={lead} onLeadStatusChange={handleLeadStatusChange} />
            ))}
            </TableBody>
           
        </TableStyled>
    );
}

export default Table;

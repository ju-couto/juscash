import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DragAndDropContainer, Line } from "./style";

import { updateLeadStatus } from "../../Services/LeadsService";
import Modal from "../Modal";

const DragAndDrop = ({ lead }) => {
  const [slots, setSlots] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onDragStart = (e, index) => {
    setDraggedItem(slots[index]);
    e.dataTransfer.setData("text", index.toString());
    e.dataTransfer.effectAllowed = "move";
  };

  const handleLeadSelect = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const SlotStatus = {
    CLIENTE_POTENCIAL: "Cliente Potencial",
    DADOS_CONFIRMADOS: "Dados Confirmados",
    ANALISE_DO_LEAD: "Analise do Lead",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    margin: "5px",
    cursor: "pointer",
  };

  const onDragOver = (index) => {
    if (draggedItem === null) {
      return;
    }

    const updatedItems = slots.slice();

    if (index >= slots.length) {
      while (index >= updatedItems.length) {
        updatedItems.push("");
      }
    }

    if (index === 2 && updatedItems.indexOf(draggedItem) === 0) {
      return;
    }

    if (index > updatedItems.indexOf(draggedItem) && draggedItem !== "") {
      updatedItems.splice(
        index,
        0,
        updatedItems.splice(updatedItems.indexOf(draggedItem), 1)[0]
      );
      setSlots(updatedItems);

      if (index === 1) {
        updateLeadStatus(lead, SlotStatus.DADOS_CONFIRMADOS);
      } else if (index === 2) {
        updateLeadStatus(lead, SlotStatus.ANALISE_DO_LEAD);
      } else {
        toast.error("Não é possível mover para essa posição", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  const onDragEnd = () => {
    setDraggedItem(null);
  };

  useEffect(() => {
    fillSlots(lead);
  }, [lead]);

  const fillSlots = (lead) => {
    const initialSlots = ["", "", ""];

    switch (lead.status) {
      case SlotStatus.CLIENTE_POTENCIAL:
        initialSlots[0] = lead.name;
        break;
      case SlotStatus.DADOS_CONFIRMADOS:
        initialSlots[1] = lead.name;
        break;
      case SlotStatus.ANALISE_DO_LEAD:
        initialSlots[2] = lead.name;
        break;
      default:
        break;
    }

    setSlots(initialSlots);
  };

  return (
    <Line style={{ color: "black", display: "flex" }}>
      <main
        onDrop={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
      >
        <DragAndDropContainer>
          {slots.map((item, idx) => {
            return (
              <li
                key={idx}
                onDragOver={() => onDragOver(idx)}
                onDrop={() => onDragOver(idx)}
                onClick={() => handleLeadSelect(lead)}
                style={listItemStyle}
              >
                <div
                  className="drag"
                  draggable
                  onDragStart={(e) => onDragStart(e, idx)}
                  onDragEnd={onDragEnd}
                >
                  {item !== "" ? item : ""}
                </div>
              </li>
            );
          })}
        </DragAndDropContainer>
      </main>
      {selectedLead && (
        <Modal
          type="view"
          leadData={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
      <ToastContainer />
    </Line>
  );
};

export default DragAndDrop;

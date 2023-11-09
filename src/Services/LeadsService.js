// Função para criar um lead com status "Cliente Potencial"
const createLead = (leadData) => {
  const leads = JSON.parse(localStorage.getItem('leads')) || { leads: [] };
  if(leads.leads.find(lead => lead.email === leadData.email)) {
    return false;
  } else {
    leadData.status = "Cliente Potencial"; // Adiciona o status ao lead
    leads.leads.push(leadData);
    localStorage.setItem('leads', JSON.stringify(leads));
    return true;
  }
  
};

// Função para ler todos os leads
const getLeads = () => {
  const leads = JSON.parse(localStorage.getItem('leads')) || { leads: [] };
  return leads.leads || [];
};

const updateLeads = (leads) => {
  localStorage.setItem('leads', JSON.stringify(leads));
  return true;
}

const updateLeadStatus = (givenLead, status)  => {
  const leads = JSON.parse(localStorage.getItem('leads')) || { leads: [] };
  const lead = leads.leads.find(lead => lead.email === givenLead.email);
  lead.status = status;
  localStorage.setItem('leads', JSON.stringify(leads));
  return true;
}

export { createLead, getLeads, updateLeadStatus, updateLeads };

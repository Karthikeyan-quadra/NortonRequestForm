import { addSP } from "../pnpjs-config";

export const addData = async (formData: any, userInfo: any) => {
  try {
    const sp = addSP();

    // Ensure that 'date' is part of formData or adjust it accordingly based on your form structure
    // const { userDisplayName, userEmail, date, detailsOfRequest } = formData;

    // Convert 'date' to a format SharePoint understands (e.g., ISO string)
    // const formattedDate = date.toISOString(); // Assuming date is a valid JavaScript Date object

    // Use the correct internal names for SharePoint columns
    await sp.web.lists.getByTitle('Form').items.add({
      RequesterName: userInfo.userDisplayName,
      Requester_Email: userInfo.userEmail,
      // Date: new Date(formData.formattedDate),
      Date: formData.Date,
      Details_of_request: formData.detailsOfRequest,
      Value_ex_vat: formData.valueExVat,
      Supplier_Name:formData.supplierName,
      Quote_attached:formData.quoteAttached,
      Type_of_assets:formData.typeOfAsset,
      Budget_line_on_budget:formData.budget,
      Insideoutside_budget:formData.ioBudget,
      RD_Bike:formData.rdBike,
      RD_project: formData.rdProject,


    }).then(res=> console.log('Data submitted successfully', res))
    
    // console.log('Data submitted successfully');

  } catch (error) {
    console.error('Error adding form data:', error);
    throw error;
  }
};

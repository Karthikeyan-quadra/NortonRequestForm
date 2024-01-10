// import * as React from 'react';
// import styles from './Form.module.scss';
// import { useState, useEffect} from 'react';
// import { Button, Form as AntdForm, Input } from 'antd';
// import type { DatePickerProps } from 'antd';
// import { Col, Row } from 'antd';
// import { Radio } from 'antd';
// import type { RadioChangeEvent } from 'antd';
// import { InputNumber } from 'antd';
// import { DatePicker} from 'antd';
// import { addData } from "../components/services/spservice";
// import * as moment from 'moment';

// import 'antd/dist/antd.css';
// import { IFormProps } from './IFormProps';

// type LayoutType = Parameters<typeof AntdForm>[0]['layout'];
// const { TextArea } = Input;
// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//   console.log(date, dateString);
// };

// const Form = (props:IFormProps) => {
//   const [form] = AntdForm.useForm();
//   const [value, setValue] = useState('');
//   const [rvalue, setRvalue] = useState<number>(1); 
//   const [enteredValues, setEnteredValues] = useState<any>({}); 
//   const currentDate = moment(); 


//   const onChange_Radio = (e: RadioChangeEvent) => {
//     console.log('radio checked', e.target.value);
//     setRvalue(e.target.value);
//   };
// console.log(props.userDisplayName);
//   const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

//   const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
//     setFormLayout(layout);
//   };

//   const formItemLayout =
//     formLayout === 'horizontal' ? { labelCol: { span: 12 }, wrapperCol: { span: 12 } } : null;

//   const buttonItemLayout =
//     formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

//     const onFinish = async (values: any) => {
//       console.log(values);
      
      
//       try {
//           form.resetFields();
//           setValue('');
//           setRvalue(1);
//           setEnteredValues(values);
  
//           await addData(values, props);
  
//           console.log('Form data submitted successfully to SharePoint list');
//       } catch (error) {
//           console.log('Error submitting form data:', error);
//       }
//   };
//     useEffect(() => {
//       console.log('Entered Values:', enteredValues);
//     }, [enteredValues]);

   

//   return (
//     <div className={styles.container}> 

//       <p style={{color:'#000', fontFamily:'Segoe UI', fontSize:'24px', fontWeight:'700'}}>New Request</p>
//       <Row>  
//     <AntdForm
//       {...formItemLayout}
//       layout={formLayout}
//       form={form}
//       initialValues={{ layout: formLayout }}
//       onValuesChange={onFormLayoutChange}
//       onFinish={onFinish}
//       style={{ maxWidth: '100%', display:'flex',flexWrap:'wrap'}}

//     >
    
//     <Col span={12}>
//       <AntdForm.Item label="Requester Name" style={{overflow:'visible'}}>
//       <Input value={props.userDisplayName} disabled />
//       </AntdForm.Item>
//       <AntdForm.Item label="Date"  name="Date" style={{overflow:'visible', paddingRight:'77px'}}
//           rules={[
//                 { required: true, message: 'Please select the date',  },
//               ]}>
//               <DatePicker onChange={onChange} defaultValue={currentDate} />
//       </AntdForm.Item>

//       <AntdForm.Item label="Details of request" name="detailsOfRequest"
//               rules={[
//                 { required: true, message: 'Please enter details of request!' },
//                 { type: 'string', message: 'Please enter valid text!' },
//               ]}>
   
// <TextArea
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Controlled autosize"
//         autoSize={{ minRows: 3, maxRows: 5 }}
//       />
//       </AntdForm.Item>
//       <AntdForm.Item label="Value ex vat"   name="valueExVat" style={{overflow:'visible'}}
//               rules={[
//                 { required: true, message: 'Please enter Value ex vat!' },
//                 { type: 'number', message: 'Please enter valid number!' },
//               ]}  >
//               <InputNumber prefix="£" placeholder=""  />
//       </AntdForm.Item>

//       <AntdForm.Item label="Supplier Name" name="supplierName" style={{overflow:'visible'}} rules={[
//                 { required: true, message: 'Please enter Supplier Name!' },
//                 { type: 'string', message: 'Please enter valid Supplier Name!' },
//               ]}>
//         <Input placeholder=""  />
//       </AntdForm.Item>

//       <AntdForm.Item label="Quote attached" name="quoteAttached" style={{overflow:'visible'}} rules={[
//                 { required: true, message: 'Please enter Quote attached!' },
//                 { type: 'string', message: 'Please enter valid Quote attached!' },
//               ]}>
//         <Input placeholder=""  />
//       </AntdForm.Item>
      
//     </Col>
    
//     <Col span={12} style={{overflow:'visible'}}>
//     <AntdForm.Item label="Type of assets" name="typeOfAsset" style={{overflow:'visible'}} rules={[
//                 { required: true, message: 'Please enter the Type of assets!' },
//                 { type: 'string', message: 'Please enter valid Type of assets!' },
//               ]}>
//         <Input placeholder=""/>
//       </AntdForm.Item>

//       <AntdForm.Item label="Budget line on budget" name="budget" style={{overflow:'visible'}} rules={[
//                 { required: true, message: 'Please enter Budget line on budget!' },
//                 { type: 'string', message: 'Please enter valid Budget line on budget!' },
//               ]}>
//         <Input placeholder=""/>
//       </AntdForm.Item>
        
//       <AntdForm.Item  label={
//     <span style={{textAlign:'left'}}>
//       Inside/outside budget.
//       <br />
//       <span style={{ color: "#ACACAC" }}>(Value in budget if inside)</span>
//     </span>
//   } name="ioBudget" style={{overflow:'visible'}} rules={[
//                 { required: true, message: 'Please enter Inside/outside budget!' },
//                 { type: 'string', message: 'Please enter valid Inside/outside budget!' },
//               ]}>
//         <Input placeholder=""/>
//       </AntdForm.Item>

//       <AntdForm.Item label="R&D Bike" name="rdBike" style={{overflow:'visible'}} rules={[
//                 { required: true, type: 'string', message: 'Please select R&D Bike'},
//               ]}> 
//       <Radio.Group onChange={onChange_Radio} value={rvalue}>
//       <Radio value='Yes'>Yes</Radio>
//       <Radio value='No'>No</Radio>
//       </Radio.Group>
//        </AntdForm.Item>

//        <AntdForm.Item label="R&D project" name="rdProject" style={{overflow:'visible'}} rules={[
//                 { required: true, message: 'Please enter R&D project!' },
//                 { type: 'string', message: 'Please enter valid R&D project!' },
//               ]}>
//         <Input placeholder=""/>
//       </AntdForm.Item>
//       </Col> 
//       <div style={{display:'flex !important'}}>

//       <AntdForm.Item {...buttonItemLayout}>
//       <Button type="primary"  style={{ backgroundColor: '#FFF', color:'#000', borderColor:'#000', borderRadius:'35px', width:'120px' }}>Cancel</Button>
//       <Button type="primary" htmlType="submit" style={{ backgroundColor: '#000', color:'#FFF', borderColor:'#000', borderRadius:'35px', marginLeft:'22px', width:'167px' }}>Submit</Button>
       
//       </AntdForm.Item>
//       </div>
//     </AntdForm>
//       </Row>
    
//     </div>
//   );
// };


// export default Form;


import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form as AntdForm, Input, Col, Row, DatePicker, InputNumber, Radio, Button } from 'antd';
import * as moment from 'moment';
import { addData } from "../components/services/spservice";
import { IFormProps } from './IFormProps';
import 'antd/dist/antd.css';
import type { DatePickerProps } from 'antd';
import type { RadioChangeEvent } from 'antd';

const { TextArea } = Input;

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

const Form = (props: IFormProps) => {
  const [form] = AntdForm.useForm();
  const [value, setValue] = useState('');
  const [rvalue, setRvalue] = useState<number>(1);
  const [enteredValues, setEnteredValues] = useState<any>({});
  const currentDate = moment();

  const onChange_Radio = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRvalue(e.target.value);
  };

  // const onFinish = async (values: any) => {
  //   console.log(values);
  //   try {
  //     form.resetFields();
  //     setValue('');
  //     setRvalue(1);
  //     setEnteredValues(values);

  //     // Assuming addData is an asynchronous function that interacts with SharePoint
  //     await addData(values, props);

  //     console.log('Form data submitted successfully to SharePoint list');
  //   } catch (error) {
  //     console.log('Error submitting form data:', error);
  //   }
  // };

  const onFinish = async (values: any) => {
    try {
      console.log(values);
  
      // Assuming addData is an asynchronous function that interacts with SharePoint
      await addData(values, props);
  
      // Reset the form fields
      form.resetFields();
      console.log('Form values after reset:', form.getFieldsValue());

      setValue('');
      setRvalue(1);
      setEnteredValues(values);
  
      console.log('Form data submitted successfully to SharePoint list');
    } catch (error) {
      console.log('Error submitting form data:', error);
    }
  };
  

  useEffect(() => {
    console.log('Entered Values:', enteredValues);
  }, [enteredValues]);


  return(
    <><p style={{color:'#000', fontFamily:'Segoe UI', fontSize:'24px', fontWeight:'700'}}>New Request</p>
   
<AntdForm
    form={form}
    name="basic"
    labelCol={{ span: 11 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth:'100%' }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
      <Row>
      <Col span={11}>
   
    <AntdForm.Item
      labelAlign='left'
      label="Requester Name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input value={props.userDisplayName} disabled/>
    </AntdForm.Item>

    {/* <AntdForm.Item label="Date"  name="Date" 
          rules={[
                { required: true, message: 'Please select the date',  },
              ]}>
    <Space direction="vertical" style={{ width: '100%' }}>
    <DatePicker onChange={onChange} defaultValue={currentDate}  style={{ width: '100%' }} />
    </Space>
      </AntdForm.Item> */}

       <AntdForm.Item 
        labelAlign='left'
       label="Date"  name="Date" 
          rules={[
                { required: true, message: 'Please select the date',  },
              ]}>
                
              <DatePicker onChange={onChange} defaultValue={currentDate} style={{ width: '100%' }} />
      </AntdForm.Item>

        
      <AntdForm.Item  
      labelAlign='left'
      label="Details of request" name="detailsOfRequest"
              rules={[
                { required: true, message: 'Please enter details of request!' },
                { type: 'string', message: 'Please enter valid text!' },
              ]}>
   
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      </AntdForm.Item>

            <AntdForm.Item 
            labelAlign='left'
            label="Value ex vat"   name="valueExVat" style={{overflow:'visible'}}
               rules={[
                 { required: true, message: 'Please enter Value ex vat!' },
                 { type: 'number', message: 'Please enter valid number!' },
               ]}  >
               <InputNumber prefix="£" placeholder=""  style={{ width: '100%' }}/>
       </AntdForm.Item>

       <AntdForm.Item 
       labelAlign='left'
       label="Supplier Name" name="supplierName" style={{overflow:'visible'}} rules={[
                { required: true, message: 'Please enter Supplier Name!' },
                { type: 'string', message: 'Please enter valid Supplier Name!' },
              ]}>
        <Input placeholder=""  />
      </AntdForm.Item>

            <AntdForm.Item 
            labelAlign='left'
            label="Quote attached" name="quoteAttached" style={{overflow:'visible'}} rules={[
                { required: true, message: 'Please enter Quote attached!' },
                { type: 'string', message: 'Please enter valid Quote attached!' },
              ]}>
        <Input placeholder=""  />
      </AntdForm.Item>
    </Col>
    <Col span={12} style={{marginLeft:'32px'}}>

      <AntdForm.Item 
      labelAlign='left'
      label="Type of assets" name="typeOfAsset" style={{overflow:'visible'}} rules={[
                { required: true, message: 'Please enter the Type of assets!' },
                { type: 'string', message: 'Please enter valid Type of assets!' },
              ]}>
        <Input placeholder=""/>
      </AntdForm.Item>
           
            <AntdForm.Item 
            labelAlign='left'
            label="Budget line on budget" name="budget" style={{overflow:'visible'}} rules={[
                { required: true, message: 'Please enter Budget line on budget!' },
                { type: 'string', message: 'Please enter valid Budget line on budget!' },
              ]}>
        <Input placeholder=""/>
      </AntdForm.Item>

      <AntdForm.Item 
      labelAlign='left'
      label={
    <span style={{textAlign:'left'}}>
      Inside/outside budget.
      <br />
      <span style={{ color: "#ACACAC" }}>(Value in budget if inside)</span>
    </span>
  } name="ioBudget" style={{overflow:'visible'}} rules={[
                { required: true, message: 'Please enter Inside/outside budget!' },
                { type: 'string', message: 'Please enter valid Inside/outside budget!' },
              ]}>
        <Input placeholder=""/>
      </AntdForm.Item>

            <AntdForm.Item 
            labelAlign='left'
            label="R&D Bike" name="rdBike" style={{overflow:'visible'}} rules={[
                { required: true, type: 'string', message: 'Please select R&D Bike'},
              ]}> 
      <Radio.Group onChange={onChange_Radio} value={rvalue}>
      <Radio value='Yes'>Yes</Radio>
      <Radio value='No'>No</Radio>
      </Radio.Group>
       </AntdForm.Item>

               <AntdForm.Item 
               labelAlign='left'
               label="R&D project" name="rdProject" style={{overflow:'visible'}} rules={[
                { required: true, message: 'Please enter R&D project!' },
                { type: 'string', message: 'Please enter valid R&D project!' },
              ]}>
        <Input placeholder=""/>
      </AntdForm.Item>

           {/* <AntdForm.Item style={{display:'flex', flexDirection:'row', marginLeft: '31rem'}} >
      <Button type="primary"  style={{ backgroundColor: '#FFF', color:'#000', borderColor:'#000', borderRadius:'35px', width:'120px' }}>Cancel</Button>    
       <Button type="primary" htmlType="submit" style={{ backgroundColor: '#000', color:'#FFF', borderColor:'#000', borderRadius:'35px', marginLeft:'22px', width:'167px' }}>Submit</Button>
      </AntdForm.Item> 
          */}
              
    </Col>

    <Col span={12}>
    <AntdForm.Item style={{display:'flex', flexDirection:'row', marginLeft: '34rem', marginTop:'58px',float: 'left'}} >
      <Button type="primary"  style={{ backgroundColor: '#FFF', color:'#000', borderColor:'#000', borderRadius:'35px', width:'115px' }}>Cancel</Button>    
      </AntdForm.Item>

      <AntdForm.Item>
       <Button type="primary" htmlType="submit" style={{ backgroundColor: '#000', color:'#FFF', borderColor:'#000', borderRadius:'35px', marginLeft:'22px', marginTop:'58px', width:'115px', float: 'left' }}>Submit</Button>
      </AntdForm.Item> 
       </Col> 
    </Row>
  </AntdForm>
  </>
);
};

export default Form;

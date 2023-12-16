import { FormRenderer, componentTypes } from '@data-driven-forms/react-form-renderer';
import { componentMapper, FormTemplate } from '@data-driven-forms/pf4-component-mapper';
const schema = {
    fields: [{
      component: componentTypes.TEXT_FIELD,
      name: 'first_name',
      label: 'First name',
      key: 'first_name'
    }, {
        component: componentTypes.TEXT_FIELD,
        name: 'last_name',
        label: 'Last name',
        key: 'last_name'
      }, {
        component: componentTypes.SELECT,
        name: 'Select Admin Department',
        label: 'Department',
        key: 'department',
        simpleValue: true,
        options: [{
            label: "HR",
            value: 'HR'
        }, {
            label: "Technology",
            value: 'Technology'
        }]
      }]
  }

function ManageProfile() {
    return (<>
        <FormRenderer
            schema={schema}
            componentMapper={componentMapper}
            FormTemplate={FormTemplate}
            onSubmit={console.log}
        />
    </>)
}
export { ManageProfile }
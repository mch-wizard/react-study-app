import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '1',
        name: 'Marcin Chmaj',
        attendance: '81%',
        average: '4.5',
        group: 'A',
        course: 'Software Engineering',
        grades: [
          {
            subject: 'Programming in C++',
            average: '3.8',
          },
          {
            subject: 'Embedded programing',
            average: '2.7',
          },
          {
            subject: 'Programming in Java',
            average: '4.5',
          },
        ],
      }}
    />
  </Modal>
);

export const Student = Template.bind({});

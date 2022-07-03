import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import StudentsList from 'components/organisms/UsersList/StudentsList';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const mockStudent = {
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
};

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  // eslint-disable-next-line
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={mockStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;

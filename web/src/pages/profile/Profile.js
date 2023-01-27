import UniversityList from '../../components/universityList/UniversityList';
import { useAuth } from '../../lib/contexts/AuthContext';
import { ProfileProvider } from '../../lib/contexts/ProfileContext';
import * as styles from './styles.module.css';
import Details from '../../components/universityDetail/Details';

const ProfilePage = () => {
  const { user } = useAuth();

  return user.universities.length > 0 ? (
    <ProfileProvider>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>My Favorites</h1>
          <section className={styles.favorites}>
            <UniversityList universities={user.universities} />
          </section>
        </div>
        <div>
          <h1 className={styles.title}>Selected University</h1>

          <section className={styles.details}>
            <Details />
          </section>
        </div>
      </div>
    </ProfileProvider>
  ) : (
    <h3>You don&apos;t have any favorites</h3>
  );
};

export default ProfilePage;

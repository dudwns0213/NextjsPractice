import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import Header from "@/components/Header";
import styles from "@/styles/NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className={styles.notFound}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>404 - 페이지를 찾을 수 없습니다.</h1>
            <p className={styles.message}>
              요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요. 😢
            </p>
            <ButtonLink className={styles.button} href="/">
              홈으로 이동
            </ButtonLink>
          </div>
        </Container>
      </div>
    </>
  );
}

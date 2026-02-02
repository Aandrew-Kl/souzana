import type { Metadata } from "next"
import Container from "@/components/layout/Container"
import Prose from "@/components/typography/Prose"

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description: "Πληροφορίες για την επεξεργασία προσωπικών δεδομένων.",
}

export default function PrivacyPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-border/70 bg-muted py-16 sm:py-24">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-serif">
            Πολιτική Απορρήτου
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">
            Η παρούσα πολιτική περιγράφει τον τρόπο συλλογής και επεξεργασίας των
            δεδομένων επικοινωνίας που μας αποστέλλετε.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <Prose>
            <h2>Υπεύθυνος επεξεργασίας</h2>
            <p>
              Το Δικηγορικό Γραφείο Παπαδόπουλος & Συνεργάτες είναι υπεύθυνο για
              την επεξεργασία των δεδομένων που αποστέλλετε μέσω της φόρμας
              επικοινωνίας.
            </p>
            <h2>Σκοπός επεξεργασίας</h2>
            <p>
              Χρησιμοποιούμε τα στοιχεία σας αποκλειστικά για να απαντήσουμε στο
              αίτημά σας και να αξιολογήσουμε αν μπορούμε να αναλάβουμε την
              υπόθεση.
            </p>
            <h2>Νομική βάση</h2>
            <p>
              Η επεξεργασία βασίζεται στη συγκατάθεσή σας και στην προ-συμβατική
              επικοινωνία.
            </p>
            <h2>Χρόνος διατήρησης</h2>
            <p>
              Διατηρούμε τα δεδομένα μόνο για όσο απαιτείται για την αξιολόγηση
              του αιτήματος και τη νόμιμη τεκμηρίωση της επικοινωνίας.
            </p>
            <h2>Δικαιώματα</h2>
            <p>
              Έχετε δικαίωμα πρόσβασης, διόρθωσης και διαγραφής των δεδομένων σας,
              σύμφωνα με την ισχύουσα νομοθεσία.
            </p>
            <h2>Ασφάλεια</h2>
            <p>
              Λαμβάνουμε τεχνικά και οργανωτικά μέτρα ώστε να προστατεύουμε τις
              πληροφορίες από μη εξουσιοδοτημένη πρόσβαση.
            </p>
          </Prose>
        </Container>
      </section>
    </div>
  )
}

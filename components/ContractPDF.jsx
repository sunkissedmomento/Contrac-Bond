// components/ContractPDF.jsx
"use client";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: { padding: 30, fontSize: 12, fontFamily: 'Helvetica' },
  title: { fontSize: 16, textAlign: 'center', marginBottom: 10, fontWeight: 700 },
  section: { marginBottom: 10 },
  input: { fontWeight: 'bold', textDecoration: 'underline' },
});

export default function ContractPDF({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>
          <Text style={styles.input}>{data.project_name}</Text>
        </Text>

        <Text style={styles.section}>
          This Agreement is made and entered into as of this <Text style={styles.input}>{data.contract_date}</Text>, by and between <Text style={styles.input}>{data.client_name}</Text>, hereinafter referred to as "Clients", and <Text style={styles.input}>{data.commissioner_name}</Text>, hereinafter referred to as "Commissioner".
        </Text>

        <Text style={styles.section}>
          WHEREAS, Client desires to engage Commissioner to develop a <Text style={styles.input}>{data.project_name}</Text> integrated with a hardware/software hereinafter referred to as the "Project"; and WHEREAS, Commissioner possesses the necessary skills and experience to develop the Project;
        </Text>

        <Text style={styles.section}>
          NOW, THEREFORE, in consideration of the mutual covenants contained herein, the parties agree as follows:
        </Text>

        <Text style={styles.section}>
          1. Scope of Work - Commissioner agrees to develop the Project in accordance with the following specifications: <Text style={styles.input}>{data.project_specifications}</Text>. The client is entitled to request a maximum of three revisions of the code and hardware design. Any additional revisions beyond the stated limit will incur additional charges.
        </Text>

        <Text style={styles.section}>
          2. Deliverables:
          - A fully functional prototype by <Text style={styles.input}>{data.prototype_due_date}</Text>
          - Source code by <Text style={styles.input}>{data.source_code_due_date}</Text>
          - Hardware design for <Text style={styles.input}>{data.hardware_name}</Text> by <Text style={styles.input}>{data.hardware_due_date}</Text>
          - Documentation by <Text style={styles.input}>{data.documentation_due_date}</Text>
        </Text>

        <Text style={styles.section}>
          3. Payment:
          - Total fee: ₱<Text style={styles.input}>{data.project_fee}</Text>
          - <Text style={styles.input}>{data.payment_1_amount}</Text> due upon signing
          - <Text style={styles.input}>{data.payment_2_amount}</Text> due between <Text style={styles.input}>{data.payment_2_date_range}</Text>
          - <Text style={styles.input}>{data.payment_3_amount}</Text> due between <Text style={styles.input}>{data.payment_3_date_range}</Text>
        </Text>

        <Text style={styles.section}>
          4. Intellectual Property: All IP rights will belong to the client upon full payment.
        </Text>

        <Text style={styles.section}>
          5. Confidentiality: All shared information shall remain confidential unless the client breaches this agreement.
        </Text>

        <Text style={styles.section}>
          6. Termination: This contract can be terminated in the event of a significant violation. Deposits will not be refunded.
        </Text>

        <Text style={styles.section}>
          7. Entire Agreement: This document constitutes the complete agreement between the parties.
        </Text>

        <Text style={styles.section}>
          Client: <Text style={styles.input}>{data.client_signature}</Text>
        </Text>
        <Text style={styles.section}>
          Commissioner: <Text style={styles.input}>{data.commissioner_signature}</Text>
        </Text>
      </Page>
    </Document>
  );
}
  
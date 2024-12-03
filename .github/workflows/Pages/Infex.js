import Head from 'next/head';
import GrowthChart from '../components/GrowthChart';

export default function Home() {
    return (
        <div>
            <Head>
                <title>ABBA's Kingdom Donation Program</title>
            </Head>
            <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#FFD700', color: '#000', fontSize: '24px', fontWeight: 'bold' }}>
                ABBA's Kingdom Donation Program
            </header>

            <main style={{ padding: '20px' }}>
                <section>
                    <h2 style={{ color: '#FFD700' }}>Program Overview</h2>
                    <p>
                        The ABBA's Kingdom Donation Program is a revolutionary initiative to restore Holy Spirit generosity, empower lives, 
                        and bring about the transformative vision of Jesus' Kingdom. It targets various demographics, combining faith, community, 
                        fiscal growth, and innovative approaches to impact lives globally.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: '#FFD700' }}>Phases and Goals</h2>
                    <ul>
                        <li><b>Phase 1:</b> Reach 1,000 donors in 30 days. Focus on building the foundation and sowing seeds of generosity.</li>
                        <li><b>Phase 2:</b> Expand to 10,000 donors, achieving significant community and personal growth impact.</li>
                        <li><b>Phase 3:</b> Scale to 100,000 donors with an 85% probability. Establish the program as a significant force for transformation.</li>
                        <li><b>Phase 4:</b> Achieve 17% penetration of target demographics globally, backed by analytics and Holy Spirit empowerment.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ color: '#FFD700' }}>Data Analysis and Projections</h2>
                    <p>The following graph illustrates the projected growth of the program across all phases, compared to similar existing passive income and donation platforms.</p>
                    <GrowthChart />
                </section>
            </main>
        </div>
    );
}

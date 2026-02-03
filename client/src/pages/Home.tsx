/*
Design Philosophy: Swiss Minimalism with Technical Precision
- Asymmetric grid layout with mathematical spacing
- Monochromatic (black/white) with cyan accent
- Hairline borders and precise typography
- Linear transitions (150ms) for micro-interactions
*/

export default function Home() {
  const projects = [
    {
      id: "01",
      title: "AI Analytics Dashboard",
      category: "App",
      description: "Machine learning powered analytics platform with real-time data visualization and predictive modeling capabilities.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Rs3Zoeg9j56pvEV46TLbqb/sandbox/FnNizoDQTB6M4I1Nx4WD4T-img-2_1770134581000_na1fn_cHJvamVjdC1hcHAtcGxhY2Vob2xkZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnMzWm9lZzlqNTZwdkVWNDZUTGJxYi9zYW5kYm94L0ZuTml6b0RRVEI2TTRJMU54NFdENFQtaW1nLTJfMTc3MDEzNDU4MTAwMF9uYTFmbl9jSEp2YW1WamRDMWhjSEF0Y0d4aFkyVm9iMnhrWlhJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XI-rgu-Xeasul-muWXD290cPVmRubVYd1teQgefXvj54nfi45cNrFenVRSvQQi18gaTLZgw~sMZduHKfmIR68XICCjXdM1wPfEj0wpHOXP5CUtrDh7OZ6Vi7tA80n7IwiSsu98tgbtKjIgf-da1NhUPRR-02IOUYLTZP1Igzlms4buSYzjWnqremISXV5fJXbZ6k6UNmprE-Jmp-uZHZIwRE~EHzDZsKKiF8JpYPHBCQxuHUNKNjgDJfxLIfNpKoSJ7A0vYLyGt0ql9-GfXoj4AxC5SZKPz9K1GaEJbxRg7K6LPAl7LkgEDjhDpPi9DGJ11PiQKhHI4olsgTaau3gA__",
    },
    {
      id: "02",
      title: "Neural Network Visualizer",
      category: "Website",
      description: "Interactive web application for visualizing deep learning architectures and training processes in real-time.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Rs3Zoeg9j56pvEV46TLbqb/sandbox/FnNizoDQTB6M4I1Nx4WD4T-img-3_1770134579000_na1fn_cHJvamVjdC13ZWJzaXRlLXBsYWNlaG9sZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnMzWm9lZzlqNTZwdkVWNDZUTGJxYi9zYW5kYm94L0ZuTml6b0RRVEI2TTRJMU54NFdENFQtaW1nLTNfMTc3MDEzNDU3OTAwMF9uYTFmbl9jSEp2YW1WamRDMTNaV0p6YVhSbExYQnNZV05sYUc5c1pHVnkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rSrQQV7T7dxHAOKtkjwsyd0VpQLMU~uVe7gWs9KnbLBLAvKMet-pXX~mUDpvHDcH1ckGUXWNivfqB-hIsIZSeC1XnQ~~SXyUmSN0VM6H8qscS6nJrnrk3Jqv31Bv4dMo2kWSEa2YtMhycea6qYmCNO1gogZEM3I~c4yMF3wLGfR83jxfrIUORPpHe8O8kDrFCOvf-AAFUZKfwL-q2P~I7argUOuiHthvLPSLFybiDtB8ghJB3-BHVr7aAbx4F2YTG9zHIJfc-zm~Vu03mSN8Qp9pHhkJwZpsnKPmunL3KUlbdnvlvIE1bGVQxz7SjeEkerN10vFRJ5i41xNHUheI7g__",
    },
    {
      id: "03",
      title: "Conversational AI Assistant",
      category: "Chatbot",
      description: "Natural language processing chatbot with context-aware responses and multi-turn conversation capabilities.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Rs3Zoeg9j56pvEV46TLbqb/sandbox/FnNizoDQTB6M4I1Nx4WD4T-img-4_1770134577000_na1fn_cHJvamVjdC1jaGF0Ym90LXBsYWNlaG9sZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnMzWm9lZzlqNTZwdkVWNDZUTGJxYi9zYW5kYm94L0ZuTml6b0RRVEI2TTRJMU54NFdENFQtaW1nLTRfMTc3MDEzNDU3NzAwMF9uYTFmbl9jSEp2YW1WamRDMWphR0YwWW05MExYQnNZV05sYUc5c1pHVnkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=s9Z8GSkaGUrP7qPyRG3jetQmQKWNvkR3lH7aVjc3FOfv7icGyrXa~esdB2PGqz8leXfbJ-dST6QZdQ9JfpvsvUSniv-Xxb-KDynv-mA0PqStKb31J37s46Q9ePLzekxsxhV9tZnZC927NTv4yXBYtl1iz3gTHmgf1U1wo729czYgXiVFmLLzy69EZnDZwRC~5ZeH7vf~aQhQaLLq7-DaJKhXS8qkt9ts9k~s2fKXFNv9lN~TzViF0HBgd4rZdN7ImPeMieEWbLILOSgo2Sh5by~34PUmVTS0mmdDuHwqrcVoeUAB14yljPvgubVfQHWdo~ieeZhKe3kPAiwXPW7oKQ__",
    },
    {
      id: "04",
      title: "Data Pipeline Automation",
      category: "App",
      description: "Automated ETL pipeline for processing large-scale datasets with AI-driven optimization and error handling.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Rs3Zoeg9j56pvEV46TLbqb/sandbox/FnNizoDQTB6M4I1Nx4WD4T-img-2_1770134581000_na1fn_cHJvamVjdC1hcHAtcGxhY2Vob2xkZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnMzWm9lZzlqNTZwdkVWNDZUTGJxYi9zYW5kYm94L0ZuTml6b0RRVEI2TTRJMU54NFdENFQtaW1nLTJfMTc3MDEzNDU4MTAwMF9uYTFmbl9jSEp2YW1WamRDMWhjSEF0Y0d4aFkyVm9iMnhrWlhJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XI-rgu-Xeasul-muWXD290cPVmRubVYd1teQgefXvj54nfi45cNrFenVRSvQQi18gaTLZgw~sMZduHKfmIR68XICCjXdM1wPfEj0wpHOXP5CUtrDh7OZ6Vi7tA80n7IwiSsu98tgbtKjIgf-da1NhUPRR-02IOUYLTZP1Igzlms4buSYzjWnqremISXV5fJXbZ6k6UNmprE-Jmp-uZHZIwRE~EHzDZsKKiF8JpYPHBCQxuHUNKNjgDJfxLIfNpKoSJ7A0vYLyGt0ql9-GfXoj4AxC5SZKPz9K1GaEJbxRg7K6LPAl7LkgEDjhDpPi9DGJ11PiQKhHI4olsgTaau3gA__",
    },
    {
      id: "05",
      title: "Smart Content Generator",
      category: "Website",
      description: "AI-powered content creation platform with semantic analysis and automated optimization for SEO.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Rs3Zoeg9j56pvEV46TLbqb/sandbox/FnNizoDQTB6M4I1Nx4WD4T-img-3_1770134579000_na1fn_cHJvamVjdC13ZWJzaXRlLXBsYWNlaG9sZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnMzWm9lZzlqNTZwdkVWNDZUTGJxYi9zYW5kYm94L0ZuTml6b0RRVEI2TTRJMU54NFdENFQtaW1nLTNfMTc3MDEzNDU3OTAwMF9uYTFmbl9jSEp2YW1WamRDMTNaV0p6YVhSbExYQnNZV05sYUc5c1pHVnkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rSrQQV7T7dxHAOKtkjwsyd0VpQLMU~uVe7gWs9KnbLBLAvKMet-pXX~mUDpvHDcH1ckGUXWNivfqB-hIsIZSeC1XnQ~~SXyUmSN0VM6H8qscS6nJrnrk3Jqv31Bv4dMo2kWSEa2YtMhycea6qYmCNO1gogZEM3I~c4yMF3wLGfR83jxfrIUORPpHe8O8kDrFCOvf-AAFUZKfwL-q2P~I7argUOuiHthvLPSLFybiDtB8ghJB3-BHVr7aAbx4F2YTG9zHIJfc-zm~Vu03mSN8Qp9pHhkJwZpsnKPmunL3KUlbdnvlvIE1bGVQxz7SjeEkerN10vFRJ5i41xNHUheI7g__",
    },
    {
      id: "06",
      title: "Customer Support Bot",
      category: "Chatbot",
      description: "Intelligent customer service chatbot with sentiment analysis and automated ticket routing capabilities.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/Rs3Zoeg9j56pvEV46TLbqb/sandbox/FnNizoDQTB6M4I1Nx4WD4T-img-4_1770134577000_na1fn_cHJvamVjdC1jaGF0Ym90LXBsYWNlaG9sZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnMzWm9lZzlqNTZwdkVWNDZUTGJxYi9zYW5kYm94L0ZuTml6b0RRVEI2TTRJMU54NFdENFQtaW1nLTRfMTc3MDEzNDU3NzAwMF9uYTFmbl9jSEp2YW1WamRDMWphR0YwWW05MExYQnNZV05sYUc5c1pHVnkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=s9Z8GSkaGUrP7qPyRG3jetQmQKWNvkR3lH7aVjc3FOfv7icGyrXa~esdB2PGqz8leXfbJ-dST6QZdQ9JfpvsvUSniv-Xxb-KDynv-mA0PqStKb31J37s46Q9ePLzekxsxhV9tZnZC927NTv4yXBYtl1iz3gTHmgf1U1wo729czYgXiVFmLLzy69EZnDZwRC~5ZeH7vf~aQhQaLLq7-DaJKhXS8qkt9ts9k~s2fKXFNv9lN~TzViF0HBgd4rZdN7ImPeMieEWbLILOSgo2Sh5by~34PUmVTS0mmdDuHwqrcVoeUAB14yljPvgubVfQHWdo~ieeZhKe3kPAiwXPW7oKQ__",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - Fixed top with hairline border */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm hairline-border border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              CN
            </div>
            <div className="flex items-center gap-8">
              <a href="#work" className="text-sm hover:text-primary transition-colors duration-150">
                WORK
              </a>
              <a href="#about" className="text-sm hover:text-primary transition-colors duration-150">
                ABOUT
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors duration-150">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric layout with abstract background */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Rs3Zoeg9j56pvEV46TLbqb/sandbox/FnNizoDQTB6M4I1Nx4WD4T-img-1_1770134575000_na1fn_aGVyby1hYnN0cmFjdC1haQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnMzWm9lZzlqNTZwdkVWNDZUTGJxYi9zYW5kYm94L0ZuTml6b0RRVEI2TTRJMU54NFdENFQtaW1nLTFfMTc3MDEzNDU3NTAwMF9uYTFmbl9hR1Z5YnkxaFluTjBjbUZqZEMxaGFRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CF2aQZ-S91jj-MUPrnGOTigB8LQKtVT5LJEdRESJ-WVZ9ijNfb5KGPuEu7xP6ZXy-N2mrzkKdEOdoP6HYBUu7gKXFCBZxDv9mM8N5TthBy9abKlrM4D7TnI-DZEz5WFTujM-Ja3mFerg0V5IxdpwfovEgTHuFayZdugGA9q-U6XThKI6D-x4wrIpXScF0EZP9KnNy8BV7ji-sbI8w7UuDznqS9ATk2MMojiMxocYayKXLtoTFzzH6djyZPAlEE4uBu53X65vfOSjt2XA~y4hMPpOZ1jDCZ1AoIHb4aSuK-SkHmn5wXmr3rFaT86HnK-iFCvNGJyCLUHbQ0LGWtOYrQ__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h1 
                className="text-6xl lg:text-8xl font-bold mb-6 leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Chenoa<br />Nussberger
              </h1>
              <div className="hairline-border border-l-2 border-primary pl-6 mb-8">
                <p className="text-lg text-muted-foreground mb-2">
                  AI STUDENT / DEVELOPER
                </p>
                <p className="text-base text-muted-foreground max-w-lg">
                  Building intelligent systems through machine learning, natural language processing, 
                  and computational design. Focused on creating practical AI solutions that bridge 
                  technology and human experience.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 flex items-end justify-end">
              <div className="text-right">
                <div 
                  className="text-9xl font-bold outline-text opacity-20"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Asymmetric layout */}
      <section id="work" className="py-24">
        <div className="container">
          <div className="flex items-baseline justify-between mb-16 hairline-border border-b border-border pb-4">
            <h2 
              className="text-4xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Selected Work
            </h2>
            <p className="text-sm text-muted-foreground">
              {projects.length} PROJECTS
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  group cursor-pointer
                  ${index === 0 ? 'lg:col-span-8' : ''}
                  ${index === 1 ? 'lg:col-span-4' : ''}
                  ${index === 2 ? 'lg:col-span-5' : ''}
                  ${index === 3 ? 'lg:col-span-7' : ''}
                  ${index === 4 ? 'lg:col-span-6' : ''}
                  ${index === 5 ? 'lg:col-span-6' : ''}
                `}
              >
                <div className="hairline-border border border-border overflow-hidden bg-card hover:border-primary transition-colors duration-150">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-150"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-3">
                      <span 
                        className="text-5xl font-bold outline-text text-primary"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {project.id}
                      </span>
                      <span className="text-xs text-muted-foreground tracking-wider">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                About
              </h2>
              <div className="hairline-border border-l-2 border-primary pl-6">
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Currently pursuing advanced studies in artificial intelligence with a focus on 
                  practical applications of machine learning and neural networks. Passionate about 
                  creating intelligent systems that solve real-world problems.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Experience spans across developing mobile applications, building responsive web 
                  platforms, and designing conversational AI interfaces. Committed to bridging the 
                  gap between cutting-edge AI research and accessible user experiences.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-8">
                <div className="hairline-border border border-border p-6 bg-background">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Skills
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                    <li>Deep Learning</li>
                    <li>Data Analysis</li>
                    <li>Full-Stack Development</li>
                  </ul>
                </div>
                <div className="hairline-border border border-border p-6 bg-background">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Tools
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Python / TensorFlow</li>
                    <li>PyTorch / Keras</li>
                    <li>React / Node.js</li>
                    <li>Docker / Kubernetes</li>
                    <li>Git / CI/CD</li>
                    <li>AWS / Cloud Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h2 
              className="text-4xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get In Touch
            </h2>
            <div className="hairline-border border-l-2 border-primary pl-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Interested in collaboration or have questions about my work? Feel free to reach out. 
                I'm always open to discussing new projects, creative ideas, or opportunities to be 
                part of innovative AI solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:chenoa@example.com"
                className="hairline-border border border-border p-6 hover:border-primary transition-colors duration-150 bg-card"
              >
                <div className="text-xs text-muted-foreground mb-2 tracking-wider">EMAIL</div>
                <div className="text-base font-mono">chenoa@example.com</div>
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hairline-border border border-border p-6 hover:border-primary transition-colors duration-150 bg-card"
              >
                <div className="text-xs text-muted-foreground mb-2 tracking-wider">GITHUB</div>
                <div className="text-base font-mono">github.com/chenoa</div>
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hairline-border border border-border p-6 hover:border-primary transition-colors duration-150 bg-card"
              >
                <div className="text-xs text-muted-foreground mb-2 tracking-wider">LINKEDIN</div>
                <div className="text-base font-mono">linkedin.com/in/chenoa</div>
              </a>
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hairline-border border border-border p-6 hover:border-primary transition-colors duration-150 bg-card"
              >
                <div className="text-xs text-muted-foreground mb-2 tracking-wider">TWITTER</div>
                <div className="text-base font-mono">@chenoa_ai</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hairline-border border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2026 Chenoa Nussberger. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              DESIGNED WITH PRECISION
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

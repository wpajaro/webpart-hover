import * as React from 'react';
import styles from './WebpartHover.module.scss';
import type { IWebpartHoverProps } from './IWebpartHoverProps';


export default class WebpartHover extends React.Component<IWebpartHoverProps, {}> {
  public render(): React.ReactElement<IWebpartHoverProps> {
    const {
      hasTeamsContext,
    } = this.props;

    return (
      <section className={`${styles.webpartHover} ${hasTeamsContext}`}>
        <div className={styles.webpartHover}> 
          <h1 className={styles.recursos}> RECURSOS</h1>
          <h2 className={styles.textoFrecuente}> De uso  frecuente</h2>
            <div className={styles.contenedorMayor}>
              <div className={styles.contenedor}>
                <a id='enlace OE' href='https://www.cartagena.gov.co/' target='_blank' rel='noopener noreferrer'>
                  <img 
                    alt="imagen referencia Sede Electrónica" 
                    src={require('../assets/sedeElectronica-1.svg')}
                    className={styles.icono1}
                  />
                  <img
                    alt="imagen referencia Sede Electrónica"
                    src={require('../assets/sedeElectronica-2.svg')}
                    className={styles.icono2}
                  />
                  <p className={styles.textoIconos}> Sede Electrónica</p>
                  <p className={styles.textoTarjetas}> Sitio Web de la Alcaldía de Cartagena</p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
              </div>
              <div className={styles.contenedor}>
                <a id="enlace outlook" href="https://www.outlook.com" target='_blank' rel='noopener noreferrer'>
                  <img
                    alt="imagen referencia Outlook"
                    src={require('../assets/outlook-1.svg')}
                    className={styles.icono1}
                  />
                  <img
                    alt="imagen referencia Outlook"
                    src={require('../assets/outlook-2.svg')}
                    className={styles.icono2}
                  />
                  <p className={styles.textoIconos}> Outlook</p>
                  <p className={styles.textoTarjetas}> Herramienta de gestión de correos electrónicos, calendario, contactos y tareas</p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
              </div>
              <div className={styles.contenedor}>
                <a id="enlace Solcado" href="https://apps.powerapps.com/play/e/default-596fa014-a0bf-4d7a-aa96-06d990b9e6fb/a/78b43aeb-ec9a-4b93-b117-6ae00c64f4a5?tenantId=596fa014-a0bf-4d7a-aa96-06d990b9e6fb&hint=6c62d29e-8070-4d35-ad7e-c362124a05c6&sourcetime=1720732885874"
                target='_blank' rel='noopener noreferrer'>
                  <img 
                      alt="imagen referencia Solcado"
                      src={require('../assets/solcado-1.svg')}
                      className={styles.icono1}
                    />
                    <img
                      alt="imagen referencia Solcado"
                      src={require('../assets/solcado-2.svg')}
                      className={styles.icono2}
                    />
                    <p className={styles.textoIconos}> Solcado</p>
                    <p className={styles.textoTarjetas}> Herramienta para solicitar cambios, actualización y eliminación de documentos </p>
                    <p className={styles.verMas}>⟶ Ver más</p>
                </a>
              </div>

              <div className={styles.contenedor}>
                <a id='enlace MIPG' href='https://mipg.cartagena.gov.co/' target='_blank' rel='noopener noreferrer'>
                  <img
                    alt="imagen referencia Mipg"
                    src={require('../assets/mipg-1.svg')}
                    className={styles.icono1}
                  />
                  <img
                    alt="imagen referencia Mipg"
                    src={require('../assets/mipg-2.svg')}
                    className={styles.icono2}
                  />
                  <p className={styles.textoIconos}> Mipg</p>
                  <p className={styles.textoTarjetas}> Modelo Integrado de Planeación y Gestión </p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
                
              </div>
              <div className={styles.contenedor}>
                <a id='enlace micuenta' href='https://micuenta.cartagena.gov.co/' target='_blank' rel='noopener noreferrer'>
                  <img
                    alt="imagen referencia mi cuenta"
                    src={require('../assets/cuenta-1.svg')}
                    className={styles.icono1}
                  />
                  <img
                    alt="imagen referencia mi cuenta"
                    src={require('../assets/cuenta-2.svg')}
                    className={styles.icono2}
                  />
                  <p className={styles.textoIconos}> Mi Cuenta</p>
                  <p className={styles.textoTarjetas}> Consulta virtual de pagos </p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
              </div>
              <div className={styles.contenedor}>
                <a id="enlace Saus" href="https://saus.cartagena.gov.co/index.php?redirect=ticket_8059_Ticket$1&noAUTO=1%20%20" target="_blank" rel="noopener noreferrer">
                  <img
                      alt="imagen referencia de Saus"
                      src={require('../assets/saus-1.svg')}
                      className={styles.icono1}
                  />
                  <img
                      alt="imagen referencia de Saus"
                      src={require('../assets/saus-2.svg')}
                      className={styles.icono2}
                  />
                  <p className={styles.textoIconos}> Saus</p>
                  <p className={styles.textoTarjetas}> Soporte y apoyo a usuario de sistemas </p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
              </div>

              <div className={styles.contenedor}>
                <a id='enlace Onedrive' href='https://www.microsoft.com/es-co/microsoft-365/onedrive/online-cloud-storage?state=CfDJ8GIDTS11_mxJlLbEvLbfH9M-
                -JWFsd-WVlnquXPBGnFM5YDinIxXllSCgueL1JWud9g54vD0uWs0IOpw62Ev-cf2DwLeNOB7Nb6TpSLOTrzeKmHOZhah95P6wMap9r9gt3AMQRAchSuRuGh0ggWc_Tx6FkWtjA5mvTU8EW6
                yWoh9GOreiMEzUPRoGaehikrmxTIrTsYqkK65geZqUpQc3Nvcvl2H9fhGerqvIe9BFdBp'
                target='_blank' rel='noopener noreferrer'>
                  <img
                      alt="imagen referencia de Onedrive"
                      src={require('../assets/onedrive-1.svg')}
                      className={styles.icono1}
                    />
                    <img
                      alt="imagen referencia de Onedrive"
                      src={require('../assets/onedrive-2.svg')}
                      className={styles.icono2}
                    />
                  <p className={styles.textoIconos}> OneDrive</p>
                  <p className={styles.textoTarjetas}> Servicio en la nube de Microsoft que te conecta a todos tus archivos </p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
                
              </div>
              <div className={styles.contenedor}>
                <a id='enlace Certico' href='https://certico.cartagena.gov.co/' target='_blank' rel='noopener noreferrer'>
                  <img
                     alt="imagen referencia de Certico"
                     src={require('../assets/certico-1.svg')}
                     className={styles.icono1}
                    />
                    <img
                      alt="imagen referencia de Certico"
                      src={require('../assets/certico-2.svg')}
                      className={styles.icono2}
                    />
                  <p className={styles.textoIconos}> Certico</p>
                  <p className={styles.textoTarjetas}> Certificado de supervisión </p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
                
              </div>
              <div className={styles.contenedor}>
                <a id='enlace SIGOB' href='https://sigob.cartagena.gov.co/Correspondencia/vdirCOMUN/frmLogin.aspx' target='_blank' rel='noopener noreferrer'>
                  <img
                      alt="imagen referencia de Saus"
                      src={require('../assets/sigob-1.svg')}
                      className={styles.icono1}
                  />
                  <img
                      alt="imagen referencia de Sigob"
                      src={require('../assets/sigob-2.svg')}
                      className={styles.icono2}
                  />
                  <p className={styles.textoIconos}> Sigob Web</p>
                  <p className={styles.textoTarjetas}> Sistema de Información y Gestión para la Gobernabilidad Democrática </p>
                  <p className={styles.verMas}>⟶ Ver más</p>
                </a>
                
              </div>
            </div> 
        </div>
      </section>
    );
  }
}

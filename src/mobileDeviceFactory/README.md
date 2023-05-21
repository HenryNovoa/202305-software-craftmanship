# Device Store

Queremos crear una aplicación general para la construcción de dispositivos móviles. 

Este configurador debe servir para varias marcas: Apple, Xiaomi, Samsung, ...

Los dispositivos tienen los siguientes componentes:

- Pantalla
- CPU
- Battery
- Camera

Suponemos que cada marca SOLO tiene un modelo de dispositivo movil.

Consideraciones:

- Xiaomi y Samsung comparten Pantalla y CPU
- Samsung y Apple comparten Battery


**TASK 1**: Diseña un diagrama UML de clases para la aplicación. ¿Qué patrón nos podría ayudar a solucionar el problema?

Queremos introducir una nueva marca OPPO que utiliza la misma CPU, pantalla y bateria que Xiaomi, pero no la cámara.

**TASK 2**: Añade al diagrama a OPPO

**TASK 3**: Implementa la aplicación solo para las marcas de Xiaomi y Samsung en TDD.

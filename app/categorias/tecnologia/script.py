import os
import json

class TSettings:
    @staticmethod
    def buscar_carpetas(ruta, archivos):
        carpetas = [nombre for nombre in os.listdir(ruta) if os.path.isdir(os.path.join(ruta, nombre))]
        
        carpetas_validas = []
        for carpeta in carpetas:
            archivos_en_carpeta = os.listdir(os.path.join(ruta, carpeta))
            if all(archivo in archivos_en_carpeta for archivo in archivos):
                carpetas_validas.append(carpeta)
        
        carpetas_validas = sorted(carpetas_validas, key=lambda x: os.path.getctime(os.path.join(ruta, x)), reverse=True)
        
        carpetas_validas = carpetas_validas[:6]
        
        resultado = {}
        for i, carpeta in enumerate(carpetas_validas):
            json_file = os.path.join(ruta, carpeta, archivos[0])
            with open(json_file, "r") as file:
                json_data = json.load(file)
            image_file = os.path.join(ruta, carpeta, archivos[1])
            #image_link = '.' + image_file
            image_link = image_file.replace('./categorias/finanzas', '')
            resultado[f'elem{i+1}'] = {'jsonLink': json_data, 'imageLink': image_link}
        
        return resultado

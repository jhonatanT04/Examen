Perfecto, con base en las imágenes y el objetivo de realizar la actividad con Kubernetes, a continuación te dejo los comandos y pasos necesarios para completar cada punto:

---

### ✅ 1. **Creación de un Deployment**

```bash
kubectl create deployment hello-nginx --image=nginxdemos/hello:latest
```

Verifica que se haya creado correctamente:

```bash
kubectl get deployments
kubectl get pods
```

---

### ✅ 2. **Exposición del Deployment como un Servicio**

Primero, expón el Deployment como un servicio `ClusterIP`:

```bash
kubectl expose deployment hello-nginx --port=80 --target-port=80 --type=ClusterIP
```

Verifica que responde dentro del clúster (puedes usar un pod temporal o port-forward):

```bash
kubectl get services
kubectl port-forward service/hello-nginx 8080:80
# Luego visita http://localhost:8080
```

Modifica a `NodePort`:

```bash
kubectl patch service hello-nginx -p '{"spec": {"type": "NodePort"}}'
kubectl get service hello-nginx
```

Busca el `NodePort` asignado (por ejemplo 30036) y accede desde navegador o con curl:

```bash
curl http://<IP_DEL_NODE>:<NODEPORT>
```

---

### ✅ 3. **Escalado del Deployment**

Escala a 4 réplicas:

```bash
kubectl scale deployment hello-nginx --replicas=4
kubectl get pods
```

Confirma que hay 4 pods corriendo.

---

### ✅ 4. **Actualización del Deployment**

Actualiza la imagen del Deployment:

```bash
kubectl set image deployment/hello-nginx hello-nginx=nginx:alpine
```

Verifica el proceso de rollout:

```bash
kubectl rollout status deployment/hello-nginx
kubectl get pods
```

Verifica el cambio:

```bash
kubectl describe pod <nombre-de-un-pod>
```

Haz una nueva consulta HTTP para ver diferencias:

```bash
curl http://<IP_DEL_NODE>:<NODEPORT>
```


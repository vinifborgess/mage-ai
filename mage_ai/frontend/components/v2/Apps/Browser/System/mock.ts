const absoluteFilePaths = [
  '/home/src/mage_ai/data_preparation/__init__.py',
  '/home/src/mage_ai/data_preparation/decorators.py',
  '/home/src/mage_ai/data_preparation/executors/__init__.py',
  '/home/src/mage_ai/data_preparation/executors/azure_container_instance_executor.py',
  '/home/src/mage_ai/data_preparation/executors/block_executor.py',
  '/home/src/mage_ai/data_preparation/executors/ecs_block_executor.py',
  '/home/src/mage_ai/data_preparation/executors/ecs_pipeline_executor.py',
  '/home/src/mage_ai/data_preparation/executors/executor_factory.py',
  '/home/src/mage_ai/data_preparation/executors/gcp_cloud_run_block_executor.py',
  '/home/src/mage_ai/data_preparation/executors/k8s_block_executor.py',
  '/home/src/mage_ai/data_preparation/executors/k8s_pipeline_executor.py',
  '/home/src/mage_ai/data_preparation/executors/pipeline_executor.py',
  '/home/src/mage_ai/data_preparation/executors/pyspark_block_executor.py',
  '/home/src/mage_ai/data_preparation/executors/pyspark_pipeline_executor.py',
  '/home/src/mage_ai/data_preparation/executors/streaming_pipeline_executor.py',
  '/home/src/mage_ai/data_preparation/git/__init__.py',
  '/home/src/mage_ai/data_preparation/git/api.py',
  '/home/src/mage_ai/data_preparation/git/clients/__init__.py',
  '/home/src/mage_ai/data_preparation/git/clients/azure_devops.py',
  '/home/src/mage_ai/data_preparation/git/clients/base.py',
  '/home/src/mage_ai/data_preparation/git/clients/bitbucket.py',
  '/home/src/mage_ai/data_preparation/git/clients/ghe.py',
  '/home/src/mage_ai/data_preparation/git/clients/github.py',
  '/home/src/mage_ai/data_preparation/git/clients/gitlab.py',
  '/home/src/mage_ai/data_preparation/git/constants.py',
  '/home/src/mage_ai/data_preparation/git/utils.py',
  '/home/src/mage_ai/data_preparation/logging/__init__.py',
  '/home/src/mage_ai/data_preparation/logging/gcs_logger_manager.py',
  '/home/src/mage_ai/data_preparation/logging/logger.py',
  '/home/src/mage_ai/data_preparation/logging/logger_manager.py',
  '/home/src/mage_ai/data_preparation/logging/logger_manager_factory.py',
  '/home/src/mage_ai/data_preparation/logging/s3_logger_manager.py',
  '/home/src/mage_ai/data_preparation/models/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/block_factory.py',
  '/home/src/mage_ai/data_preparation/models/block/constants.py',
  '/home/src/mage_ai/data_preparation/models/block/content.py',
  '/home/src/mage_ai/data_preparation/models/block/data_integration/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/data_integration/constants.py',
  '/home/src/mage_ai/data_preparation/models/block/data_integration/data.py',
  '/home/src/mage_ai/data_preparation/models/block/data_integration/mixins.py',
  '/home/src/mage_ai/data_preparation/models/block/data_integration/schema.py',
  '/home/src/mage_ai/data_preparation/models/block/data_integration/utils.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/block.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/block_sql.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/block_yaml.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/constants.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/dbt_adapter.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/dbt_cli.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/profiles.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/project.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/sources.py',
  '/home/src/mage_ai/data_preparation/models/block/dbt/utils.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/child.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/constants.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/counter.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/data.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/dynamic_child.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/factory.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/models.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/shared.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/utils.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/variables.py',
  '/home/src/mage_ai/data_preparation/models/block/dynamic/wrappers.py',
  '/home/src/mage_ai/data_preparation/models/block/errors.py',
  '/home/src/mage_ai/data_preparation/models/block/extension/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/extension/block.py',
  '/home/src/mage_ai/data_preparation/models/block/extension/great_expectations.py',
  '/home/src/mage_ai/data_preparation/models/block/extension/utils.py',
  '/home/src/mage_ai/data_preparation/models/block/global_data_product/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/hook/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/hook/block.py',
  '/home/src/mage_ai/data_preparation/models/block/integration/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/outputs.py',
  '/home/src/mage_ai/data_preparation/models/block/platform/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/platform/mixins.py',
  '/home/src/mage_ai/data_preparation/models/block/platform/utils.py',
  '/home/src/mage_ai/data_preparation/models/block/r/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/r/templates/data_exporter.jinja',
  '/home/src/mage_ai/data_preparation/models/block/r/templates/data_loader.jinja',
  '/home/src/mage_ai/data_preparation/models/block/r/templates/transformer.jinja',
  '/home/src/mage_ai/data_preparation/models/block/remote/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/remote/models.py',
  '/home/src/mage_ai/data_preparation/models/block/seed.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/dynamic/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/dynamic/constants.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/dynamic/mixins.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/dynamic/models.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/global_data_products/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/global_data_products/mixins.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/global_data_products/models.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/variables/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/variables/mixins.py',
  '/home/src/mage_ai/data_preparation/models/block/settings/variables/models.py',
  '/home/src/mage_ai/data_preparation/models/block/spark/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/spark/constants.py',
  '/home/src/mage_ai/data_preparation/models/block/spark/mixins.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/bigquery.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/clickhouse.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/constants.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/druid.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/duckdb.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/mssql.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/mysql.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/postgres.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/redshift.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/snowflake.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/spark.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/trino.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/utils/__init__.py',
  '/home/src/mage_ai/data_preparation/models/block/sql/utils/shared.py',
  '/home/src/mage_ai/data_preparation/models/block/utils.py',
  '/home/src/mage_ai/data_preparation/models/constants.py',
  '/home/src/mage_ai/data_preparation/models/custom_templates/__init__.py',
  '/home/src/mage_ai/data_preparation/models/custom_templates/constants.py',
  '/home/src/mage_ai/data_preparation/models/custom_templates/custom_block_template.py',
  '/home/src/mage_ai/data_preparation/models/custom_templates/custom_pipeline_template.py',
  '/home/src/mage_ai/data_preparation/models/custom_templates/utils.py',
  '/home/src/mage_ai/data_preparation/models/download/__init__.py',
  '/home/src/mage_ai/data_preparation/models/errors.py',
  '/home/src/mage_ai/data_preparation/models/file.py',
  '/home/src/mage_ai/data_preparation/models/global_data_product/__init__.py',
  '/home/src/mage_ai/data_preparation/models/global_hooks/__init__.py',
  '/home/src/mage_ai/data_preparation/models/global_hooks/constants.py',
  '/home/src/mage_ai/data_preparation/models/global_hooks/models.py',
  '/home/src/mage_ai/data_preparation/models/global_hooks/pipelines.py',
  '/home/src/mage_ai/data_preparation/models/global_hooks/predicates.py',
  '/home/src/mage_ai/data_preparation/models/global_hooks/utils.py',
  '/home/src/mage_ai/data_preparation/models/interfaces.py',
  '/home/src/mage_ai/data_preparation/models/pipeline.py',
  '/home/src/mage_ai/data_preparation/models/pipelines/__init__.py',
  '/home/src/mage_ai/data_preparation/models/pipelines/constants.py',
  '/home/src/mage_ai/data_preparation/models/pipelines/integration_pipeline.py',
  '/home/src/mage_ai/data_preparation/models/pipelines/interactions.py',
  '/home/src/mage_ai/data_preparation/models/pipelines/models.py',
  '/home/src/mage_ai/data_preparation/models/pipelines/seed.py',
  '/home/src/mage_ai/data_preparation/models/pipelines/utils.py',
  '/home/src/mage_ai/data_preparation/models/project/__init__.py',
  '/home/src/mage_ai/data_preparation/models/project/constants.py',
  '/home/src/mage_ai/data_preparation/models/project/models.py',
  '/home/src/mage_ai/data_preparation/models/triggers/__init__.py',
  '/home/src/mage_ai/data_preparation/models/utils.py',
  '/home/src/mage_ai/data_preparation/models/variable.py',
  '/home/src/mage_ai/data_preparation/models/variables/__init__.py',
  '/home/src/mage_ai/data_preparation/models/variables/cache.py',
  '/home/src/mage_ai/data_preparation/models/variables/constants.py',
  '/home/src/mage_ai/data_preparation/models/variables/summarizer.py',
  '/home/src/mage_ai/data_preparation/models/variables/utils.py',
  '/home/src/mage_ai/data_preparation/models/widget/__init__.py',
  '/home/src/mage_ai/data_preparation/models/widget/charts.py',
  '/home/src/mage_ai/data_preparation/models/widget/constants.py',
  '/home/src/mage_ai/data_preparation/models/widget/utils.py',
  '/home/src/mage_ai/data_preparation/preferences.py',
  '/home/src/mage_ai/data_preparation/repo_manager.py',
  '/home/src/mage_ai/data_preparation/shared/__init__.py',
  '/home/src/mage_ai/data_preparation/shared/constants.py',
  '/home/src/mage_ai/data_preparation/shared/retry.py',
  '/home/src/mage_ai/data_preparation/shared/secrets.py',
  '/home/src/mage_ai/data_preparation/shared/stream.py',
  '/home/src/mage_ai/data_preparation/shared/utils.py',
  '/home/src/mage_ai/data_preparation/storage/__init__.py',
  '/home/src/mage_ai/data_preparation/storage/base_storage.py',
  '/home/src/mage_ai/data_preparation/storage/gcs_storage.py',
  '/home/src/mage_ai/data_preparation/storage/local_storage.py',
  '/home/src/mage_ai/data_preparation/storage/s3_storage.py',
  '/home/src/mage_ai/data_preparation/storage/utils.py',
  '/home/src/mage_ai/data_preparation/sync/__init__.py',
  '/home/src/mage_ai/data_preparation/sync/base_sync.py',
  '/home/src/mage_ai/data_preparation/sync/git_sync.py',
  '/home/src/mage_ai/data_preparation/templates/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/callbacks/base.jinja',
  '/home/src/mage_ai/data_preparation/templates/callbacks/default.py',
  '/home/src/mage_ai/data_preparation/templates/callbacks/orchestration/triggers/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/conditionals/base.jinja',
  '/home/src/mage_ai/data_preparation/templates/constants.py',
  '/home/src/mage_ai/data_preparation/templates/custom/python/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/algolia.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/azure_blob_storage.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/bigquery.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/chroma.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/deltalake/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/deltalake/azure_blob_storage.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/deltalake/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/deltalake/gcs.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/deltalake/s3.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/duckdb.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/file.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/google_cloud_storage.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/google_sheets.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/mongodb.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/mssql.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/mysql.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/oracledb.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/orchestration/triggers/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/postgres.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/pyspark/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/pyspark/s3.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/qdrant.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/r/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/redshift.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/s3.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/snowflake.py',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/activemq.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/azure_data_lake.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/bigquery.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/clickhouse.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/duckdb.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/dummy.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/elasticsearch.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/google_cloud_pubsub.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/google_cloud_storage.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/influxdb.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/kafka.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/kinesis.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/mongodb.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/mssql.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/mysql.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/opensearch.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/oracledb.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/postgres.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/rabbitmq.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/redshift.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/s3.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/snowflake.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/streaming/trino.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_exporters/weaviate.py',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/constants.py',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/destinations/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/destinations/base.py',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/destinations/base.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/sources/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/sources/base.py',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/sources/base.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_integrations/utils.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/algolia.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/api.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/azure_blob_storage.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/bigquery.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/chroma.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/deltalake/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/deltalake/azure_blob_storage.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/deltalake/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/deltalake/gcs.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/deltalake/s3.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/druid.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/duckdb.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/file.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/google_cloud_storage.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/google_sheets.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/mongodb.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/mssql.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/mysql.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/oracledb.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/orchestration/triggers/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/pinot.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/postgres.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/pyspark/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/pyspark/s3.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/qdrant.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/r/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/redshift.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/s3.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/snowflake.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/activemq.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/amazon_sqs.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/azure_event_hub.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/generic_python.py',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/google_cloud_pubsub.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/influxdb.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/kafka.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/kinesis.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/mongodb.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/nats.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/streaming/rabbitmq.yaml',
  '/home/src/mage_ai/data_preparation/templates/data_loaders/weaviate.py',
  '/home/src/mage_ai/data_preparation/templates/extensions/great_expectations/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/main/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/main/metadata.yaml',
  '/home/src/mage_ai/data_preparation/templates/pipeline/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/pipeline/metadata.yaml',
  '/home/src/mage_ai/data_preparation/templates/pipeline_execution/emr_bootstrap.sh',
  '/home/src/mage_ai/data_preparation/templates/pipeline_execution/spark_script.jinja',
  '/home/src/mage_ai/data_preparation/templates/repo/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/charts/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/custom/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/data_exporters/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/data_exporters/export_titanic_clean.py',
  '/home/src/mage_ai/data_preparation/templates/repo/data_loaders/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/data_loaders/load_titanic.py',
  '/home/src/mage_ai/data_preparation/templates/repo/dbt/profiles.yml',
  '/home/src/mage_ai/data_preparation/templates/repo/extensions/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/interactions/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/io_config.yaml',
  '/home/src/mage_ai/data_preparation/templates/repo/metadata.yaml',
  '/home/src/mage_ai/data_preparation/templates/repo/pipelines/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/pipelines/example_pipeline/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/pipelines/example_pipeline/metadata.yaml',
  '/home/src/mage_ai/data_preparation/templates/repo/requirements.txt',
  '/home/src/mage_ai/data_preparation/templates/repo/scratchpads/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/transformers/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/repo/transformers/fill_in_missing_values.py',
  '/home/src/mage_ai/data_preparation/templates/repo/utils/__init__.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/bigquery.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/default.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/google_cloud_storage.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/mysql.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/postgres.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/redshift.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/s3.py',
  '/home/src/mage_ai/data_preparation/templates/sensors/snowflake.py',
  '/home/src/mage_ai/data_preparation/templates/template.py',
  '/home/src/mage_ai/data_preparation/templates/testable.jinja',
  '/home/src/mage_ai/data_preparation/templates/transformers/data_warehouse_transformer.jinja',
  '/home/src/mage_ai/data_preparation/templates/transformers/default.jinja',
  '/home/src/mage_ai/data_preparation/templates/transformers/default_pyspark.jinja',
  '/home/src/mage_ai/data_preparation/templates/transformers/default_streaming.jinja',
  '/home/src/mage_ai/data_preparation/templates/transformers/r/default.r',
  '/home/src/mage_ai/data_preparation/templates/transformers/suggestion_fmt.jinja',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/action.jinja',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/average.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/clean_column_name.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/count.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/count_distinct.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/diff.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/first.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/fix_syntax_errors.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/impute.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/last.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/max.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/median.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/min.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/normalize.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/reformat.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/remove.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/remove_outliers.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/select.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/shift_down.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/shift_up.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/standardize.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/column/sum.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/row/drop_duplicate.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/row/filter.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/row/remove.py',
  '/home/src/mage_ai/data_preparation/templates/transformers/transformer_actions/row/sort.py',
  '/home/src/mage_ai/data_preparation/templates/utils.py',
  '/home/src/mage_ai/data_preparation/utils/__init__.py',
  '/home/src/mage_ai/data_preparation/utils/block/__init__.py',
  '/home/src/mage_ai/data_preparation/utils/block/convert_content.py',
  '/home/src/mage_ai/data_preparation/variable_manager.py',
];

export default absoluteFilePaths;
